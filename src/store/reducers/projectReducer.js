
const initState ={
projects: [
    {id: '1', title: 'grow mangoes', content: "Mango" },
    {id: '2', title: 'grow bannana', content: "Bannana" },
    {id: '3', title: 'grow apple', content: "Apple" },
    

]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_PROJECT_SUCCESS':
        console.log('create project success');
        return state;
      case 'CREATE_PROJECT_ERROR':
        console.log('create project error');
        return state;
      default:
        return state;
    }
  };
  
  export default projectReducer;