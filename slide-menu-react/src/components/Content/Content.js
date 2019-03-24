import React from "react";
import "./Content.css";

class Content extends React.Component {
  render() {
    return (
      <section className={`content ${this.props.navBarActive ? "margin" : ""}`}>
        Content Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptas corporis blanditiis doloremque adipisci itaque magni amet
        tenetur, suscipit possimus explicabo recusandae quod. Consequatur
        necessitatibus, maxime iure! Nobis perspiciatis voluptate accusantium
        cupiditate voluptates, nulla a eos non dicta neque sunt nam quisquam eum
        consequatur nesciunt praesentium fuga est aspernatur necessitatibus
        adipisci fugit illum asperiores. Officiis temporibus dolorum cum atque
        laudantium impedit qui et beatae? Commodi ipsa fugiat, illo distinctio
        dolorem sapiente at delectus nemo officiis rem, saepe aliquid modi
        ratione ea minus deserunt unde. Inventore explicabo, eaque maiores qui
        blanditiis dignissimos amet in! Eligendi, laborum ratione quis maiores
        repudiandae beatae aliquid.
      </section>
    );
  }
}

export default Content;
