module.exports = async function (context, req) {

    const optionList = ["נ","ג","ה","ש"];
    const selectedOption =  Math.floor(Math.random() * Math.floor(optionList.length));
    context.log(`Selected Option: ${optionList[selectedOption]}`);
      
    context.res = {
        body: `Hello you spun: ${optionList[selectedOption]}`
    };
};