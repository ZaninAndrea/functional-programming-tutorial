const assert = require('assert');
const buildTree = require('./buildTree.js');

describe("buildTree", function() {
    it('should return an object', function() {
        try {
            assert(typeof({}) === typeof(buildTree.buildTree([], null)));
        } catch (error) {
            printMessage('Hint 💡', 'You should return an object');
            throw error;
        }
    });

    it('should return the correct tree', function() {
        try {
            const correctBuildTree = (list, parent) => {
                var node = {}
                list
                    .filter(x => x.parent === parent)
                    .forEach(x => {
                        node[x.id] = correctBuildTree(list, x.id)
                    })
                return node
            }

            const tree1 = [{
                    "id": "Grandad",
                    "parent": null
                },
                {
                    "id": "Dad",
                    "parent": "Grandad"
                },
                {
                    "id": "You",
                    "parent": "Dad"
                },
                {
                    "id": "Son",
                    "parent": "You"
                },
                {
                    "id": "Daughter",
                    "parent": "You"
                },
                {
                    "id": "Brother",
                    "parent": "Dad"
                },
                {
                    "id": "Nephew",
                    "parent": "Brother"
                },
                {
                    "id": "Niece",
                    "parent": "Brother"
                },
                {
                    "id": "Sister",
                    "parent": "Dad"
                },
                {
                    "id": "Uncle",
                    "parent": "Grandad"
                },
                {
                    "id": "Cousin",
                    "parent": "Uncle"
                }
            ]
            const solution1 = correctBuildTree(tree1, null)

            const tree2 = [{
                    "id": "Grandad",
                    "parent": null
                },
                {
                    "id": "Dad",
                    "parent": "Grandad"
                },
                {
                    "id": "You",
                    "parent": "John"
                },
                {
                    "id": "John",
                    "parent": "You"
                },
                {
                    "id": "Daughter",
                    "parent": "You"
                }
            ]
            const solution2 = correctBuildTree(tree2, null)

            const tree3 = [{
                    "id": "Grandad",
                    "parent": null
                },
                {
                    "id": "a",
                    "parent": "Grandad"
                },
                {
                    "id": "b",
                    "parent": "a"
                },
                {
                    "id": "c",
                    "parent": "b"
                },
                {
                    "id": "d",
                    "parent": "c"
                },
                {
                    "id": "e",
                    "parent": "d"
                },
                {
                    "id": "f",
                    "parent": "e"
                },
            ]
            const solution3 = correctBuildTree(tree3, null)

            assert.deepEqual(solution1, buildTree.buildTree(tree1, null));
            assert.deepEqual(solution2, buildTree.buildTree(tree2, null));
            assert.deepEqual(solution3, buildTree.buildTree(tree3, null));
        } catch (error) {
            printMessage('Hint 💡', 'Try thinking about how to reduce the problem at each call and what base case to use');
            throw error;
        }
    });
})

function printMessage(channel, message) {
    console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
