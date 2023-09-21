import { useSelector } from "react-redux"
import ButtonList from "./ButtonList"
import VedioContainer from "./VedioContainer"
const MainContainer = () => {
  const selector = useSelector(store=>store.app.isMenuOpen);
  return (
    <div className={`${selector ? 'ml-28 ':''}`}>
        <ButtonList />
        <VedioContainer/>
    </div>
  )
}

export default MainContainer