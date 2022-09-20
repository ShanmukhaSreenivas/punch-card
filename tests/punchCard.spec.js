// example.spec.js
const { test, expect } = require("@playwright/test");

test("PunchCard", async ({ page }) => {
  await page.goto(process.env.URL);
  console.log("PunchCard");
  console.log(process.env.URL.length);
  // Expect a title "to contain" a substring.
  await page.locator("#username").fill(process.env.USR);
  // await new Promise(r => setTimeout(r, 2000)); // hard wait for 2000ms
  await page.locator("#password").fill(process.env.PWD);

  await new Promise(r => setTimeout(r, 1000)); // hard wait for 2000ms
  await page.click("text=Log in");
  console.log("Logging in");
  var d = new Date();
  // print date & time in YYYY-MM-DD HH:MM:SS format
  console.log(d.toLocaleString());
  // console.log("Hours: " + d.getHours());
  if (d.getHours()+5 < 12) {
    console.log("Morning");
    await page.click("text=Sign In");
  } else {
    console.log("Afternoon");
    await page.click("text=Sign Out");
  }
  console.log("Done");
});
