# iAuction v0.0.6

Helps you watch your countdown

## Installation

Using NPM:

```vim
npm install iauction
```

Using Yarn:

```vim
yarn add iauction
```

## Usage

```js
import iauction from "iauction" // const auctionIs = require("iauction")
...
iauction({
  countdownInMin: 1,
  startDate: "2022-04-19 04:45:00",
  endDate: "2022-04-19 04:46:00",
  callback: (time) => console.log(time),
});
```

| Parameters       | Value type | Description                                                                                                                                                                                                        | Information                                                                                                                              |
| ---------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `countdownInMin` | `integer`  | set your timer interface, it will affect to your callback                                                                                                                                                          |
| `startDate`      | `string`   | when to start, basically the timer always do their job, but `start` and `reps` will tell you is the status was `start` (_boolean_) and how many repetition (`reps`) left until the status `start` change to `true` | use your **local time** and set with the format (`YYYY-MM-DD HH:mm:ss`) this will be convert to universal time in the system             |
| `endDate`        | `string`   | when the countdown should stop and don't call your `callback` again                                                                                                                                                | use your **local time** and set with the format (`YYYY-MM-DD HH:mm:ss`) this will be convert to universal time in the system             |
| `callback`       | `function` | this function will return the `{ start: [boolean], time: [string], reps: [integer] }`                                                                                                                              | `start`: indicates is now time to start?, `time`: indicates the countdown, `reps`: how many repetition has been through from `startDate` |


## Why `iAuction`?

`iauction` helps you to watch your countdown and set the start and end datetime easier by using your local time.

`iauction` methods are great for:

<ul>
  <li>Handling auction such dutch auction for NFT</li>
  <li>Handling common auction</li>
</ul>

<div style="background-color: rgba(173, 57, 199, 0.26); color: white; padding: 1rem; margin-top: 3rem">
  <h4>Support this package by adding features 🏏</h4>
  
  <h4>Steps:</h4>
  <ul> 
    <li>Create feature on your local machine and make sure it's work</li> 
    <li>Don't forget to put documentation and also test case to help me use your feature</li> 
    <li>Make a <a href="https://github.com/irwansyafani/iauction/pulls" >request</a> from your branch <i>([username]-[feature_name])</i> to branch <i>features</i></li>
  </ul> 

  ✏️ notes: please create your branch by following this format: ([username]-[feature_name])
</div>
