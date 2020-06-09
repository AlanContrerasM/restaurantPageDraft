//module to be exported

const myDOM = (() => {
    //not necessarily useful but just to practice modules
    const create = (a) => {
        const element = document.createElement(a);
        element.innerHTML = "Hello World #6";
        return element
    };
    
    //reset content div
    const clearContent = () => {
      document.querySelector(".content").innerHTML = ""
    };

    //add general styles to the web, not directly linked to elements
    const setGenStyle = (a) => {
      let style = document.createElement('style');
      // a shoudl be a string like
      //    myDOM.setGenStyle(`
      // #target {
      // color: blueviolet;
      // }
      // `);
      style.innerHTML = a;
      document.head.appendChild(style);
    };


    return {
      create,
      clearContent,
      setGenStyle
    };
  })();

  export default myDOM;