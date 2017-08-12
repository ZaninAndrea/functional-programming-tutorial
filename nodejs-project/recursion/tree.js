/*
OUR FILESYSTEM IS THIS

    home
    ├── andrea
    │   ├── funds.csv
    │   └── paper.pdf
    ├── john
    │   ├── logs
    │   │   ├── logs1
    │   │   ├── logs2
    │   │   ├── logs3
    │   │   └── logs4
    │   ├── summer1.jpg
    │   ├── summer2.jpg
    │   └── summer3.jpg
    ├── notes.txt
    └── todo.txt

*/

const tree = {
    name : "home",
    files : ["notes.txt","todo.txt"],
    subFolders: [{
        name : "andrea",
        files : ["paper.pdf","funds.csv"],
        subFolders: []
    },
    {
        name: "john",
        files : ["summer1.jpg","summer2.jpg", "summer3.jpg"],
        subFolders: [{
            name : "logs",
            files : ["logs1","logs2","logs3","logs4"],
            subFolders: []
        }]
    }]
};

find = element =>
            tree =>
                {
                    if (tree.files.indexOf(element)!==-1){ // that is if the element is in this folder
                        return true;
                    }
                    else if (tree.subFolders.length !== 0){ // that is if the are subfolders
                        const otherFolders = tree.subFolders.map(find(element)); // searches the element in every subfolder
                        const aOrB = (a,b)=>a || b; // a function applying the or operator
                        const found = otherFolders.reduce(aOrB, false); // returns true if element was in at least one of the subfolders
                        return found;
                    }else{
                        return false; // returns false if it's not in this folder and there are no subfolders
                    }
                };

console.log("paper.pdf > "+find("paper.pdf")(tree));
console.log("randomfile > "+find("randomfile")(tree));
