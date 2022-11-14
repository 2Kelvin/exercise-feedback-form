var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function FeedbackForm() {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      messageIsSent = _React$useState2[0],
      setIsSent = _React$useState2[1];

  var _React$useState3 = React.useState(""),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      theMessage = _React$useState4[0],
      setTheMessage = _React$useState4[1];

  if (messageIsSent) {
    return React.createElement(
      "h1",
      null,
      "Arigato!"
    );
  } else {
    return React.createElement(
      "form",
      {
        onSubmit: function onSubmit(e) {
          e.preventDefault();
          alert("Sending \"" + theMessage + "\"");
          setIsSent(true);
        }
      },
      React.createElement("textarea", {
        palceholder: "Your message here...",
        value: theMessage,
        onChange: function onChange(e) {
          return setTheMessage(e.target.value);
        }
      }),
      React.createElement(
        "button",
        { type: "submit" },
        "Send Feedback"
      )
    );
  }
}

export default function App() {
  return React.createElement(FeedbackForm, null);
}

// react connection
var rootNode = document.getElementById("reactRoot");
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App, null));