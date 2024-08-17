function reverseInteger(int) {
    let intAsString = int.toString();

    let intAsStringReversed = intAsString.split('').reverse().join('');

    if (int < 0) {
        intAsStringReversed = "-" + intAsStringReversed;
    }
    let intReversed = parseInt(intAsStringReversed);

    return intReversed;
}

let testCase1 = reverseInteger(123);  

let testCase2 = reverseInteger(-456);

console.log(testCase1);
console.log(testCase2);


function findIndex(sortedArray, target) {
    let arrayMidIndex = Math.floor(sortedArray.length / 2);

    if (sortedArray[arrayMidIndex] == target) {
        console.log("Your target " + target + " has been found at this index: " + arrayMidIndex);
    } else if (sortedArray[arrayMidIndex] < target) {
        findIndex(sortedArray.slice(arrayMidIndex));
    } else if (sortedArray[arrayMidIndex] > target) {
        findIndex(sortedArray.slice(0, arrayMidIndex));
    } else {
        console.log("Target " + target + " is not found, but it would be inserted at index " + arrayMidIndex)
    }
    
}

let nums = [1, 3, 5, 6]

let testCase1q2 = findIndex(nums, 5);
let testCase2q2 = findIndex(nums, 2);




class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}



class LinkedList {
    constructor() {
        this.head = null;
    }

    deleteNode(nodeData) {
        let current = this.head;
        let prev;

        if (current.data === nodeData) {
            this.head = current.next;
            return;
        }

        while (current.data != nodeData) {
            let temp = current;
            current = current.next;
            prev = temp;
        }

        prev.next = current.next;
    }

    printList() {
        let current = this.head;
        let str = '';
        while(current !== null) {
            str = str + current.data + ' -> ';
            current = current.next;
        }

        console.log(str + ' null ');
    }
}


let node1 = new Node(4);
let node2 = new Node(5);
let node3 = new Node(1);
let node4 = new Node(9);

node1.next = node2;
node2.next = node3;
node3.next = node4;

let linkedList1 = new LinkedList();
linkedList1.head = node1;


console.log("Here is the linked list before deleting 5:")
linkedList1.printList();

linkedList1.deleteNode(5);

console.log("\nHere is the linked list after deleting 5:")
linkedList1.printList();

node1.next = node2;
node2.next = node3;
node3.next = node4;

let linkedList2 = new LinkedList();
linkedList2.head = node1;

console.log("\nHere is the linked list before deleting 4:")
linkedList2.printList();

linkedList2.deleteNode(4);

console.log("\nHere is the linked list after deleting 4:")
linkedList2.printList();



function findSmallestDuplicate(array) {
    let setOfDuplicates = ([]);

    for (let i = 0; i < array.length; i++) {
        let target = array[i];

        for (let j = i + 1; j < array.length - i; j++) {
            if (array[j] == target) {
                setOfDuplicates.push(target);
            }
        }
    }

    let smallestDuplicate = Infinity;

    for (duplicate in setOfDuplicates) {
        if (duplicate < smallestDuplicate) {
            smallestDuplicate = duplicate;
        }
    }

    return smallestDuplicate;
}


let array1 =  [4, 10, 5, 1, 11, 5, 1, 4, 1];
let result1 = findSmallestDuplicate(array1);
console.log("\nThe smallest duplicate in the array is " + result1);

let array2 = [1, 10, 1, -1, 10, -1];
let result2 = findSmallestDuplicate(array2);
console.log("\nThe smallest duplicate in the array is " + result2);

console.log("\nThere is an issue with my code in the last question because it always returns 0. \nI think it's because I did not initialize the set properly, or I'm not adding (.push()) correctly to the set.\nThe logic is that any repeated ints in the original array are pushed into a set (which can only contain unique numbers.\nThus, the setOfDuplicates only contains one value for each number that has duplicates. From there, it's easy to simply loop through that set to find the lowest value.\nHowever, obviously, something is not working.")


console.log("\nSee the commented-out section in the code below to see my answers to the MCQs")
/*
MCQs:

Which type of search is efficient on a sorted array?
B) Binary Search

What is the time complexity of inserting a new node at the
beginning of a singly linked list?
A) O(1)

In a binary search tree (BST), the left child of a node is always:
B) Smaller than the node

Which traversal of a BST visits nodes in ascending order?
C) In-order

In a doubly linked list, what does the prev pointer in the first
node point to?
B) Null


*/
