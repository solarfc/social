export const updateObjectInArray = (items, id, objPropName, newObjProps) => {
    items.map(item => {
        if(item[objPropName] === id) {
            return {...item, ...newObjProps}
        }
        return item;
    })
};