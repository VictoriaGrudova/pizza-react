import React from "react"
import ContentLoader from "react-content-loader";

const Skeleton:React.FC = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="135" cy="117" r="114" /> 
    <rect x="21" y="243" rx="4" ry="4" width="227" height="14" /> 
    <rect x="21" y="276" rx="10" ry="10" width="227" height="68" /> 
    <rect x="21" y="368" rx="5" ry="5" width="92" height="20" /> 
    <rect x="125" y="361" rx="23" ry="23" width="122" height="37" />
  </ContentLoader>
)

export default Skeleton;