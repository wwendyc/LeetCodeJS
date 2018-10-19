var addTwoNumbers = function(l1, l2) {

  // Edge cases
  if (!l1) return l2
  if (!l2) return l1

  const newHead = new ListNode(0)
  let listRunner = newHead
  let p1 = l1
  let p2 = l2

  let carryover = 0

  while (p1 || p2 || carryover) {
    const val1 = p1 ? p1.val : 0
    const val2 = p2 ? p2.val : 0
    const sum = val1 + val2 + carryover
    carryover = sum >= 10 ? 1 : 0

    listRunner.next = new ListNode(sum % 10)
    listRunner = listRunner.next
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
  }
  return newHead.next
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
