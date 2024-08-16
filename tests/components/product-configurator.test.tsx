import { describe, expect, it } from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ProductConfigurator from "../../src/components/product-configurator";
import { products } from "../../src/productOptionsData.json";

const setup = (initialEntries: string[] = []) => {
  const router = createMemoryRouter(
    [
      {
        path: "/",
        element: <ProductConfigurator products={products} />,
      },
    ],
    {
      initialEntries: ["/", ...initialEntries],
    }
  );

  return {
    router,
    user: userEvent.setup(),
    ...render(<RouterProvider router={router} />),
  };
};

describe("ProductConfigurator", () => {
  it("renders product options with no selected options and no summary table", () => {
    setup();

    expect(screen.getAllByRole("radio", { checked: false })).toHaveLength(4);
    expect(screen.queryByRole("table")).not.toBeInTheDocument();
  });

  it("renders product options with default selected options and summary table", () => {
    setup(["?cover-colour=red&paper-type=lined"]);

    expect(screen.getAllByRole("radio", { checked: true })).toHaveLength(2);
    expect(screen.queryByRole("table")).toBeInTheDocument();
  });

  it("should correctly update query params and select an option", async () => {
    const { user, router } = setup();

    expect(screen.getAllByRole("radio", { checked: false })).toHaveLength(4);
    expect(screen.queryByRole("table")).not.toBeInTheDocument();

    await user.click(screen.getAllByRole("radio", { name: "Sunset" })[0]);
    await user.click(screen.getAllByRole("radio", { name: "Dotted" })[0]);

    expect(screen.getAllByRole("radio", { checked: true })).toHaveLength(2);
    expect(screen.queryByRole("table")).toBeInTheDocument();
    expect(
      router.state.location.search.indexOf("cover-colour")
    ).toBeGreaterThanOrEqual(0);
    expect(
      router.state.location.search.indexOf("paper-type")
    ).toBeGreaterThanOrEqual(0);
  });
});
