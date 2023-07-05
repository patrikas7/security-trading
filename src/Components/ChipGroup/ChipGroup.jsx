import { useState } from "react";
import { Box, Chip } from "@mui/material";
import PropTypes from "prop-types";

const ChipGroup = ({ chips, onSelect }) => {
  const [activeChip, setActiveChip] = useState(null);

  const handleOnClick = (chip, index) => {
    setActiveChip(chips[index]);
    if (onSelect) onSelect(chip);
  };

  const getChipStyles = (chip) => ({
    backgroundColor: chip === activeChip ? "#64b5f6" : "#e0e0e0",
    color: chip === activeChip ? "#ffffff" : "#000000",
    border: chip === activeChip ? "2px solid #2196f3" : "2px solid #bdbdbd",
  });

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      {chips.map((chip, index) => (
        <Chip
          label={chip}
          clickable
          variant="outlined"
          key={index}
          onClick={() => handleOnClick(chip, index)}
          style={getChipStyles(chip)}
        />
      ))}
    </Box>
  );
};

ChipGroup.propTypes = {
  chips: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func,
};

export default ChipGroup;
