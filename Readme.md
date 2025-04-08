# PoC Firefox extension for form filling in multiple tabs

AutoFormFiller is a browser extension designed to open multiple tabs and fill them with data provided by the user. In this case it opens up [google.pl](https://www.google.pl/) and searches for a specific query based on the input JSON.

This is just a proof of concept that can be extended to work with different sites and forms, which will allow for easier automation of certain tasks. 

## Installation

**From packaged extension**

- Download and run [.xpi file](https://github.com/TheKiromen/AutoFormFiller/blob/main/release/af581f92510a4d28a03c-1.0.xpi)
- Click `Add` in the popup to confirm instalation of this extension in Firefox

**Or instal manually**

1. Clone the repository or download the source code.
2. Open Firefox and navigate to `about:debugging`.
3. Click on "This Firefox" in the sidebar.
4. Click on "Load Temporary Add-on".
5. Select the `manifest.json` file from the main directory.

## Usage

- Click the extension icon


### Sample JSON
```json
[
    {
        "id": 1,
        "query": "Hello World!"
    },
    {
        "id": 2,
        "query": "example.com"
    },
    {
        "id": 3,
        "query": "Do a barrel roll"
    }
]
