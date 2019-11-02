
class Decoding {

    /*
     * class Node public int frequency; // the frequency of this tree public char
     * data; public Node left, right;
     * 
     */

    void decode(String s, Node root) {
        Node n = root;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '0') {
                n = n.left;
            } else {
                n = n.right;
            }
            if (n.left == null && n.right == null) {
                System.out.print(n.data);
                n = root;
            }
        }
    }

}
