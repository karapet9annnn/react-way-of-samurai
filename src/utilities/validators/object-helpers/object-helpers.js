
//  RENAME
export const objectHelper = (object, ACUserId,objProp,objSetting) => {
    return object.map(user => {
        if (user[objProp] === ACUserId) {
            return { ...user, ...objSetting }
        }
        return user
    })
}