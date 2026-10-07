import { test, expect } from "@playwright/test";
import { doctors, upcomingSlots } from "../src/data/doctors";
import { galleryTiles } from "../src/data/gallery";
import { team } from "../src/data/legacy";
import { moreServices, services } from "../src/data/services";

test.describe("homepage smoke test", () => {
  test("renders the hero, nav, and core sections", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Radhamadhav Medical Hall/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Trusted medicines");

    for (const id of ["about", "services", "doctors", "videos", "wiki", "legacy", "contact"]) {
      await expect(page.locator(`#${id}`)).toBeVisible();
    }
  });

  test("lists a card per doctor plus reserved slots, and three health-wiki teasers", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page.locator("#doctors .doctor-card")).toHaveCount(
      doctors.length + upcomingSlots.length,
    );
    await expect(page.locator("#doctors .doctor-card.slot")).toHaveCount(upcomingSlots.length);
    await expect(page.locator("#wiki-grid .wiki-card")).toHaveCount(3);
  });

  test("call and directions links point somewhere real", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.locator(".hero").getByRole("link", { name: /call the counter/i }),
    ).toHaveAttribute("href", /^tel:/);
    await expect(page.getByRole("link", { name: /get directions/i })).toHaveAttribute(
      "href",
      /maps\.app\.goo\.gl|google\.com\/maps/,
    );
  });

  test("mobile menu toggles open and closed", async ({ page }) => {
    await page.setViewportSize({ width: 480, height: 900 });
    await page.goto("/");

    const toggle = page.getByRole("button", { name: /toggle menu/i });
    const nav = page.locator("#primary-nav");

    await expect(nav).not.toHaveClass(/open/);
    await toggle.click();
    await expect(nav).toHaveClass(/open/);
    await toggle.click();
    await expect(nav).not.toHaveClass(/open/);
  });

  test("doctors sub-page lists every doctor with skills and availability", async ({ page }) => {
    await page.goto("/doctors/");

    await expect(page.getByRole("heading", { level: 1 })).toContainText("visiting doctors");
    await expect(page.locator(".profile")).toHaveCount(doctors.length);
    await expect(page.locator("#richard-narjinary .skill-list li").first()).toBeVisible();
    const richard = doctors.find((d) => d.slug === "richard-narjinary")!;
    await expect(page.locator("#richard-narjinary .week-day.on")).toHaveCount(
      new Set(richard.availability.map((a) => a.day)).size,
    );
  });

  test("shows the Google rating, reviews, and the Mirik address", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("#reviews .review-grid .review-card")).toHaveCount(4);
    await expect(page.locator("#reviews .rating-num")).toHaveText("4.9");
    await expect(page.locator("footer address")).toContainText("Mirik");
    await expect(page.locator("#videos .reel-card")).toHaveCount(4);
    await expect(page.locator("footer .credit a").first()).toHaveAttribute("href", /1947\.io/);
    await expect(page.locator("#contact iframe")).toHaveAttribute("src", /google\.com\/maps/);
  });

  test("Nepali and Bengali versions render with their own copy", async ({ page }) => {
    await page.goto("/ne/");
    await expect(page.locator("html")).toHaveAttribute("lang", "ne");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("भरपर्दो");
    await expect(page.locator(".lang-menu a[aria-current='page']")).toContainText("नेपाली");

    await page.goto("/bn/doctors/");
    await expect(page.locator("html")).toHaveAttribute("lang", "bn");
    await expect(page.locator(".profile")).toHaveCount(doctors.length);
  });

  test("services page lists the expanded service catalogue", async ({ page }) => {
    await page.goto("/services/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("pharmacy");
    await expect(page.locator(".service-detail")).toHaveCount(
      services.length + moreServices.length,
    );
    await expect(page.locator("#cold-chain .service-points li").first()).toBeVisible();
  });

  test("about page tells the founder story with timeline and gallery", async ({ page }) => {
    await page.goto("/about/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Fifty years");
    await expect(page.locator(".history-line li")).toHaveCount(9);
    await expect(page.locator(".team-card")).toHaveCount(team.length);
    await expect(page.locator(".founders .legacy-portrait")).toHaveCount(3);
    await expect(page.locator("#gallery .img-card")).toHaveCount(galleryTiles.length);
  });

  test("health tips page carries the reels and the full wiki", async ({ page }) => {
    await page.goto("/health-tips/");
    await expect(page.locator("#videos .reel-card")).toHaveCount(4);
    await expect(page.locator("#wiki-grid .wiki-card")).toHaveCount(6);
  });
});
