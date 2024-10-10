import service from "@/http";
export const getHomeNavList = () => {
  let url = "/nn_cms/nn_cms_view/xjcbc/n1_a.php";
  return service.get(url, { params: { id: 123456, nns_output_type: "json" } });
};
