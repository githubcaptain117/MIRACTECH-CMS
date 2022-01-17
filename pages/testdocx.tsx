import React, { Component } from "react";
import { render } from "react-dom";

// import { saveAs } from "file-saver";
import { Packer } from "docx";
// import { experiences, education, skills, achievements } from "../cv-data";
// import { DocumentCreator } from "../cv-generator";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  generate(): void {
    // const documentCreator = new DocumentCreator();
    // const doc = documentCreator.create([
    //   experiences,
    //   education,
    //   skills,
    //   achievements
    // ]);

    // Packer.toBlob(doc).then(blob => {
    //   console.log(blob);
    //   saveAs(blob, "example.docx");
    //   console.log("Document created successfully");
    // });
  }

  render() {
    return (
      <div>
        <p>
          Start editing to see some magic happen :)
          <button onClick={this.generate}>Generate CV with docx!</button>
        </p>
      </div>
    );
  }
}

export default App
