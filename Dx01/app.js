const heading = React.createElement("h1", {
    id: "heading",
    class:"text-center"
}, "React Element");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
