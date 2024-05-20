"use strict";
function getAction(role) {
    switch (role.toLowerCase()) {
        case 'admin':
            return 'You have full access to the system.';
        case 'editor':
            return 'You can edit content.';
        case 'viewer':
            return 'You can view content.';
        case 'guest':
        case 'anonymous':
            return 'You have limited access.';
        default:
            return 'Role not recognized.';
    }
}
const role1 = 'admin';
console.log(`Role: ${role1}, Action: ${getAction(role1)}`);
const role2 = 'editor';
console.log(`Role: ${role2}, Action: ${getAction(role2)}`);
const role3 = 'viewer';
console.log(`Role: ${role3}, Action: ${getAction(role3)}`);
const role4 = 'guest';
console.log(`Role: ${role4}, Action: ${getAction(role4)}`);
const role5 = 'anonymous';
console.log(`Role: ${role5}, Action: ${getAction(role5)}`);
const role6 = 'unknown';
console.log(`Role: ${role6}, Action: ${getAction(role6)}`);
