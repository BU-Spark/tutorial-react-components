import React from "react";
import example_data from "./data/example_data.json";
import "./App.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  Typography,
} from "@mui/material";

function App() {
  return (
    <div className="App">
      <List>
        <ListItem>
          <CatFact
            fact={example_data[0].fact}
            fact_number={0}
            // photo="https://cataas.com/cat/cute"
          />
        </ListItem>
        <ListItem>
          <CatFact
            fact={example_data[0].fact}
            fact_number={0}
            // photo="https://cataas.com/cat/cute"
          />
        </ListItem>
        <ListItem>
          <CatFact
            fact={example_data[0].fact}
            fact_number={0}
            // photo="https://cataas.com/cat/cute"
          />
        </ListItem>
      </List>
    </div>
  );
}

export default App;

interface CatFactProps {
  fact_number: number;
  fact: string;
  photo?: string;
}

const CatFact = ({ fact_number, fact, photo }: CatFactProps) => {
  const [photoUrl, setPhotoUrl] = React.useState(photo);
  const handleOnClick = () => {
    setPhotoUrl("https://cataas.com/cat/cute");
    console.log(photoUrl);
  };
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Cat Fact Central
        </Typography>
        <Typography variant="h5" component="div">
          Cat Fact #{fact_number}
        </Typography>
        <Typography variant="body2">{fact}</Typography>
      </CardContent>
      <CardActions>
        {photoUrl !== undefined ? (
          <img src={photoUrl} alt="A cat" />
        ) : (
          <Button size="small" onClick={handleOnClick}>
            Get a Cat Photo
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
