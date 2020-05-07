//module to be exported

const myModules = (() => {
    //not necessarily useful but just to practice modules
    const create = (a) => {
        const element = document.createElement(a);
        element.innerHTML = "Hello World #5";
        return element
    };
    const speak = (a) => {
        alert(a);
    }

    return {
      create,
      speak
    };
  })();

  export default myModules;