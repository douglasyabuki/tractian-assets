
interface TreeNode {
    id: string;
    name: string;
    components?: TreeNode[];
    assets?: TreeNode[];
    locations?: TreeNode[];
}

interface TreeNodeProps {

}

const searchTree = (nodes: TreeNode[], searchTerm: string): TreeNode[] => {
    const result: TreeNode[] = [];
  
    const traverse = (node: TreeNode, parents: TreeNode[] = []) => {
      if (node.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        result.push(...parents, node);
      }
      if (node.components) {
        node.components.forEach((child) => traverse(child, [...parents, node]));
      }
      if (node.assets) {
        node.assets.forEach((child) => traverse(child, [...parents, node]));
      }
      if (node.locations) {
        node.locations.forEach((child) => traverse(child, [...parents, node]));
      }
    };
  
    nodes.forEach((node) => traverse(node));
  
    return result;
};

export const TreeNode = ({}: TreeNodeProps) => {
  return (
    <div>
      
    </div>
  );
}