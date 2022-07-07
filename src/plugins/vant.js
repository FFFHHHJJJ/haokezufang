import {
  Button,
  Tabbar,
  TabbarItem,
  Search,
  Swipe,
  SwipeItem,
  Icon,
  Lazyload,
  Cell,
  Grid,
  GridItem, IndexBar, IndexAnchor, NavBar, DropdownMenu, DropdownItem, Area, Form, Field, Image
} from 'vant'
const elememts = [
  Button,
  Tabbar,
  TabbarItem,
  Search,
  Swipe,
  SwipeItem,
  Icon,
  Lazyload,
  Cell,
  Grid,
  GridItem, IndexBar, IndexAnchor, NavBar, DropdownMenu, DropdownItem, Area, Form, Field, Image
]

export default function (Vue) {
  elememts.forEach((item) => {
    Vue.use(item)
  })
}
