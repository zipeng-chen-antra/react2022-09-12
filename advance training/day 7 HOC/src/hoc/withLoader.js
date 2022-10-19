import React from "react";
import BarLoading from "../components/animation/BarLoading";

export function withLoader(InnerComponent,options={
  type: "loading"
}) {
  return class OuterComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      };
      this.completeLoading = this.completeLoading.bind(this);
      
      switch(options.type){
        case "loading":
          this.loadMessage = <div>loading...</div>
          break;
        case "spinner":
          this.loadMessage = <div>spinner...</div>
          break;
        case "bar":
          this.loadMessage = <BarLoading />
        default:
          break;
      }
    }

    completeLoading() {
      this.setState({ isLoading: false });
    }

    render() {
      return (
        <InnerComponent
          isLoading={this.state.isLoading}
          completeLoading={this.completeLoading}
          loadMessage={this.loadMessage}
          {...this.props}
        />
      );
    }
  };
}
