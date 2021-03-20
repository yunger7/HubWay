import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

export default function Create() {
	return (
		<Container>
			<Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button type="submit" variant="contained" color="secondary" onClick={() => console.log('You clicked me!')}>
        Submit
      </Button>
		</Container>
	);
}
