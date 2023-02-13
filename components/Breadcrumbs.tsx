import Link from 'next/link'
import { useRouter } from 'next/router'
import React, {ReactNode } from 'react'
import _ from "lodash"


type CrumbProps = {
   text: string,
   href: string,
   last: boolean
}

const Crumb = ({ text, href, last=false }: CrumbProps) => {
   if (last) {
      return <li className="breadcrumb-item text-muted">{text}</li>
   }
 
   return (
      <>
         <li className="breadcrumb-item text-muted">
            <Link href={href} className="text-muted text-hover-primary">{text}</Link>
         </li>
         <li className="breadcrumb-item">
            <span className="bullet bg-gray-400 w-5px h-2px" />
         </li>
      </>
   );
}


const Breadcrumbs = () => {
   
   const router = useRouter();

   const breadcrumbs = React.useMemo(function generateBreadcrumbs() {

       // Remove any query parameters, as those aren't included in breadcrumbs
      const asPathWithoutQuery = router.asPath.split("?")[0];

      // Break down the path between "/"s, removing empty entities
      // Ex:"/my/nested/path" --> ["my", "nested", "path"]
      const asPathNestedRoutes = asPathWithoutQuery.split("/").filter(v => v.length > 0);

      // Iterate over the list of nested route parts and build
      // a "crumb" object for each one.
      const crumblist = asPathNestedRoutes.map((subpath, idx) => {
         // We can get the partial nested route for the crumb
         // by joining together the path parts up to this point.
         const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
         // The title will just be the route string for now
         const text = _.capitalize(subpath);
         return { href, text }; 
      })

      // Add in a default "Home" crumb for the top-level
      return [{ href: "/", text: "Home" }, ...crumblist];
   }, [router.asPath]);  

  return (
      <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0">
         {
            breadcrumbs.map((crumb, idx) => (
               <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
            ))
         }
      </ul>
   );
} 

export default Breadcrumbs