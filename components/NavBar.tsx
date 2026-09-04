import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationItemsData2 } from "@/lib/data/navigationItemsData";
// import ListItem from "@/components/ListItem";
import Link from "next/link";

// import { navigationItemsData } from "../lib/data/navigationItemsData";

function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationItemsData2.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.items?.length ? (
              <>
                <NavigationMenuTrigger className="text-lg font-normal">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                    {item.items.map((subItem) => (
                      <ListItem
                        key={subItem.title}
                        href={subItem.href}
                        title={subItem.title}
                        className="text-lg"
                      >
                        {subItem.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                className="text-lg"
                render={<Link href={item.href ?? "/"}>{item.title}</Link>}
              />
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  className: string;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink
        className={className}
        closeOnClick
        render={
          <Link href={href}>
            <div className="flex flex-col gap-1 ">
              <div className="leading-none text-base text-secondary-foreground font-medium">
                {title}
              </div>
              <div className="line-clamp-2 text-muted-foreground text-base">
                {children}
              </div>
            </div>
          </Link>
        }
      />
    </li>
  );
}

export default NavBar;
// <NavigationMenu className="">
//   <NavigationMenuList>
//     {/* Dropdown for Services */}
//     <NavigationMenuItem>
//       <NavigationMenuTrigger>Services</NavigationMenuTrigger>
//       <NavigationMenuContent>
//         <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
//           <ListItem href="/services/interior" title="Interior Painting">
//             Full interior painting for residential spaces.
//           </ListItem>
//           <ListItem href="/services/exterior" title="Exterior Painting">
//             Durable exterior finishes and weatherproofing.
//           </ListItem>
//         </ul>
//       </NavigationMenuContent>
//     </NavigationMenuItem>
//     {/* Direct Nav Links */}
//     <NavigationMenuItem>
//       <NavigationMenuLink
//         className={navigationMenuTriggerStyle()}
//         render={<Link href="/about">About Us</Link>}
//       />
//     </NavigationMenuItem>
//     <NavigationMenuItem>
//       <NavigationMenuLink
//         className={navigationMenuTriggerStyle()}
//         render={<Link href="/contact">Contact</Link>}
//       />
//     </NavigationMenuItem>
//   </NavigationMenuList>
// </NavigationMenu>
