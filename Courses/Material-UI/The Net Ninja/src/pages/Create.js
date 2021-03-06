import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles({
	field: {
		marginTop: 20,
		marginBottom: 20,
		display: "block",
	},
});

export default function Create() {
	const history = useHistory();
	const classes = useStyles();
	const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
	const [details, setDetails] = useState("");
	const [detailsError, setDetailsError] = useState(false);
	const [category, setCategory] = useState('money');

	const handleSubmit = e => {
		e.preventDefault();
    setTitleError(false)
    setDetailsError(false);

    if (title == "") {
      setTitleError(true);
    }

    if (details == "") {
      setDetailsError(true);
    }

		if (title && details) {
			console.log(title, details, category);
			fetch("http://localhost:8000/notes", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ title, details, category })
			}).then(() => history.push("/"));
		}
	};

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

			<form noValidate autoComplete="off" onSubmit={handleSubmit}>
				<TextField
					className={classes.field}
					onChange={e => setTitle(e.target.value)}
          error={titleError}
					label="Note title"
					variant="outlined"
					color="secondary"
					fullWidth
					required
				/>
				<TextField
					className={classes.field}
					onChange={e => setDetails(e.target.value)}
          error={detailsError}
					label="Details"
					variant="outlined"
					color="secondary"
					fullWidth
					multiline
					rows={4}
					required
				/>

				<FormControl className={classes.field}>
					<FormLabel>Note Category</FormLabel>
					<RadioGroup value={category} onChange={e => setCategory(e.target.value)}>
						<FormControlLabel value="money" control={<Radio />} label="Money" />
						<FormControlLabel value="todos" control={<Radio />} label="Todos" />
						<FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
						<FormControlLabel value="work" control={<Radio />} label="Work" />
					</RadioGroup>
				</FormControl>

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          endIcon={<KeyboardArrowRightIcon />}
          onClick={() => console.log("You clicked me!")}
        >
          Submit
        </Button>
			</form>

		</Container>
	);
}
