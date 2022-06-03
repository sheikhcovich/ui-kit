import Card from "./Card";
import Button from "../Button/Button";
import Rating from "../Rating/Rating";
import { itemPropTypes } from "../Carousel/Carousel.stories";
import React from "react";

export default {
  title: "Card",
  component: Card,
};

export const MyCard = ({ item }: itemPropTypes) => (
  <Card>
    <Card.Img
      img={
        item?.image
          ? item.image
          : "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/53/395712/1.jpg?7965"
      }
    />
    <Card.Title style={{ textOverflow: "ellipsis" }}>
      {item
        ? item.title
        : "IGel-Power Gel Liquid Laundry Detergent-Front &amp; Top Load 2 Litre Offer"}
    </Card.Title>
    <Card.Body>
      <p style={{ fontSize: "16px" }}>{item ? item.price : 15.23} $</p>
      <p
        style={{
          fontSize: "14px",
          textDecoration: "line-through",
          opacity: ".5",
        }}
      >
        35.23 $
      </p>

      <div style={{ display: "flex", alignItems: "start" }}>
        <Rating
          value={item ? item?.rating?.rate | 3 : 3}
          size="medium"
          readOnly
        />
        <span style={{ opacity: ".5" }}>
          ({item ? item?.rating?.count | 120 : 120})
        </span>
      </div>
    </Card.Body>
    <Card.Actions>
      <Button fullWidth variant="primary">
        add to cart
      </Button>
    </Card.Actions>
  </Card>
);
export const CustomCard = () => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "14px",
    }}
  >
    {Array.from(Array(6).keys()).map((i) => (
      <Card key={i} width="30%" style={{ width: "25%" }}>
        <Card.Img img="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/53/395712/1.jpg?7965" />
        <Card.Title>
          IGel-Power Gel Liquid Laundry Detergent-Front &amp; Top Load 2 Litre
          Offer
        </Card.Title>
        <Card.Body>
          <p style={{ fontSize: "16px" }}>15.23 $</p>
          <p
            style={{
              fontSize: "14px",
              textDecoration: "line-through",
              opacity: ".5",
            }}
          >
            35.23 $
          </p>

          <Rating value={3} size="medium" readOnly />
        </Card.Body>
        <Card.Actions>
          <Button fullWidth variant="primary">
            add to cart
          </Button>
        </Card.Actions>
      </Card>
    ))}
    <Card width="30%">
      <Card.Img img="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/53/395712/1.jpg?7965" />
      <Card.Title>
        IGel-Power Gel Liquid Laundry Detergent-Front &amp; Top Load 2 Litre
        Offer
      </Card.Title>
      <Card.Body>
        <p style={{ fontSize: "16px" }}>15.23 $</p>
        <p
          style={{
            fontSize: "14px",
            textDecoration: "line-through",
            opacity: ".5",
          }}
        >
          35.23 $
        </p>

        <Rating value={3} size="medium" readOnly />
      </Card.Body>
      <Card.Actions>
        <Button fullWidth variant="primary">
          add to cart
        </Button>
      </Card.Actions>
    </Card>
    <Card width="30%">
      <Card.Img img="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/53/395712/1.jpg?7965" />
      <Card.Title>IGel-Power Gel </Card.Title>
      <Card.Body>
        <p style={{ fontSize: "16px" }}>15.23 $</p>
        <p
          style={{
            fontSize: "14px",
            textDecoration: "line-through",
            opacity: ".5",
          }}
        >
          35.23 $
        </p>

        <Rating value={3} size="medium" readOnly />
      </Card.Body>
      <Card.Actions>
        <Button fullWidth variant="primary">
          add to cart
        </Button>
      </Card.Actions>
    </Card>
  </div>
);
