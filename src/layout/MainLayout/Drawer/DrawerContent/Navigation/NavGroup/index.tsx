import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { Box, List, Typography } from "@mui/material";

import NavItem from "../NavItem";
import { RootState } from "../../../../../../store";

const NavGroup = ({ item }: any) => {
  const menu = useSelector((state: RootState) => state.Menu);
  const { drawerOpen } = menu;

  const navCollapse = item.children?.map(
    (menuItem: { id: number; type: "collapse" | "item" }): React.ReactNode => {
      switch (menuItem.type) {
        case "collapse":
          return (
            <Typography
              key={menuItem.id}
              variant="caption"
              color="error"
              sx={{ p: 2.5 }}
            >
              collapse - only available in paid version
            </Typography>
          );
        case "item":
          return <NavItem key={menuItem.id} item={menuItem} level={1} />;
        default:
          return (
            <Typography
              key={menuItem.id}
              variant="h6"
              color="error"
              align="center"
            >
              Fix - Group Collapse or Items
            </Typography>
          );
      }
    }
  );

  return (
    <List
      subheader={
        item.title &&
        drawerOpen && (
          <Box sx={{ pl: 3, mb: 1.5 }}>
            <Typography variant="subtitle2" color="textSecondary">
              {item.title}
            </Typography>
          </Box>
        )
      }
      sx={{ mb: drawerOpen ? 1.5 : 0, py: 0, zIndex: 0 }}
    >
      {navCollapse}
    </List>
  );
};

NavGroup.propTypes = {
  item: PropTypes.object,
};

export default NavGroup;