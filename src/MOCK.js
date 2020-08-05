const desksList = [
    'desk1',
    'desk2',
    'desk3'
];

const rolesList = [
    'role1',
    'role2',
    'role3'
];

export async function getDesks(){
    return desksList;
}

export async function getRoles(){
    return rolesList;
}
