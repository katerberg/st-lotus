import React from "react";
import PropTypes from "prop-types";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AssignmentIcon from "@mui/icons-material/Assignment";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
// import QueryStatsIcon from '@mui/icons-material/QueryStats';
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GavelIcon from "@mui/icons-material/Gavel";
import TableChartIcon from "@mui/icons-material/TableChart";
import MenuItem from "./MenuItem";

export default function Menu({ isOpen, onClose }) {
  return (
    <Drawer anchor="right" onClose={onClose} open={isOpen}>
      <List>
        <MenuItem icon={<HomeIcon />} link="/" onClick={onClose} text="Home" />
        <MenuItem
          icon={<ListAltIcon />}
          link="/decks"
          onClick={onClose}
          text="Decks"
        />
        <MenuItem
          icon={<AssignmentIcon />}
          link="/how-to-play"
          onClick={onClose}
          text="How To Play"
        />
        <MenuItem
          icon={<FormatListNumberedIcon />}
          link="/top-cards"
          onClick={onClose}
          text="Top Cards"
        />
        <MenuItem
          icon={<MenuBookIcon />}
          link="/articles"
          onClick={onClose}
          text="Articles"
        />
        {/* <MenuItem icon={<QueryStatsIcon />}
        link="/draft-analyzer"
        onClick={onClose}
        text="Draft Analyzer"
      /> */}
        <MenuItem
          icon={<GavelIcon />}
          link="/rulings"
          onClick={onClose}
          text="Rulings"
        />
        <MenuItem
          external
          icon={<TableChartIcon />}
          link="https://docs.google.com/spreadsheets/d/1AdrhWkDX7i9p2rZbEKzDs3nQAhCvcH0LAXZQNwWMsnA/edit#gid=2063153199"
          onClick={onClose}
          text="Data"
        />
      </List>
    </Drawer>
  );
}

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
