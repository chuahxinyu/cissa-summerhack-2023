import { useEffect, useState } from "react";
import { BulletPoint, IBulletSection } from "../types";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import TextInputField from '../Forms/TextInputField';
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const BulletSection = ({ section }: { section: IBulletSection }) => {
  const [numBullets, setNumBullets] = useState(2);

  function incrementNumBullets(): void {
    setNumBullets(numBullets+ 1);
  }

  // TODO: remove bullet point from form when decrement
  function decrementNumBullets(): void {
    setNumBullets(numBullets - 1);
  }

  // TODO: implement swapping of form values
  function swap(arr: Array<BulletPoint>, i: number, j: number): void {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return (
    <Grid container spacing={4} paddingLeft={4}>
      <Grid container item spacing={2} id="bulletSection">
        <Typography variant="h4" paddingTop={5}>
          {section.sectionTitle}
        </Typography>
        <Grid container item direction="column" id="bulletSectionTitleField">
          {Array.from({ length: numBullets }).map((_, i) => (
              <Grid container item xs direction="row" alignItems="center">
                <Grid item>
                  <IconButton onClick={() => swap(section.bullets, i, i-1)}>
                    <KeyboardArrowUp />
                  </IconButton>
                  <IconButton>
                    <KeyboardArrowDown />
                  </IconButton>
                </Grid>
                <Grid item xs>
                  <TextInputField
                    label="Bullet Point"
                    name={`bullets[${i}].text`}
                    placeholder="e.g. Skills"
                    size="small"
                  />
                </Grid>
              </Grid>
          ))}
          </Grid>
        </Grid>
        <Button type="button" variant="contained" onClick={incrementNumBullets}>
          Add Bullet Point
        </Button>
        <Button type="button" variant="contained" onClick={decrementNumBullets}>
          Remove Bullet Point
        </Button>
      </Grid>
  );
};

export default BulletSection;
