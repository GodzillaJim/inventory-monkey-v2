import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openItem: ["dashboard"],
  openComponent: "buttons",
  drawerOpen: false,
  componentDrawerOpen: true,
};

const Menu = createSlice({
  name: "menu",
  initialState,
  reducers: {
    activeItem(state, action) {
      state.openItem = action.payload.openItem;
    },
    activeComponent(state, action) {
      state.openComponent = action.payload.openComponent;
    },
    activeComponentDrawer(state, action) {
      state.componentDrawerOpen = action.payload.componentDrawerOpen;
    },
    openDrawer(state, action) {
      state.drawerOpen = action.payload.componentDrawerOpen;
    },
    openComponentDrawer(state, action) {
      state.componentDrawerOpen = action.payload.componentDrawerOpen;
    },
  },
});

export default Menu.reducer;
export const { activeItem, activeComponent, openDrawer, openComponentDrawer } =
  Menu.actions;
