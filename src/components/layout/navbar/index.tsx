import { getMenu } from "@/lib/shopify";

async function Navbar() {
  const menu = await getMenu("next-js-frontend-menu");
  console.log(menu);
  return <nav></nav>;
}

export default Navbar;
