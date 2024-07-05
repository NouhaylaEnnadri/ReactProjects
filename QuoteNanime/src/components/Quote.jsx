import React from "react";

const Quote = () => {
  return (
    <div>
      <div className="flex justify-between ml-32 mr-32">
        <button className="btn btn-success">New Filter</button>
        <button className="btn btn-warning">Randomize</button>
      </div>
      <div class="min-h-screen bg-base-100 flex justify-center items-center">
        <div class="max-w-sm bg-secondary border-2 border-primary p-6 rounded-md tracking-wide shadow-lg">
          <div id="header" class="flex items-center mb-4">
            <img
              alt="avatar"
              class="w-20 rounded-full border-2 border-primary"
              src="https://picsum.photos/seed/picsum/200"
            />
            <div id="header-text" class="leading-5 ml-6 sm">
              <h4 id="name" class="text-xl font-semibold">
                John Doe
              </h4>
              )
              <h5 id="job" class="font-semibold text-base-300   ">
                Designer
              </h5>
            </div>
          </div>
          <div id="quote">
            <q class="italic text-base-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </q>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
