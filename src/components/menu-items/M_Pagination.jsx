// imported from https://materializecss.com/pagination.html

const M_Pagination = () => {
  return (
    <>
      <ul class="pagination">
        <li class="disabled">
          <a href="#!">
            <i class="material-icons">«</i>
          </a>
        </li>
        <li class="active">
          <a href="#!">1</a>
        </li>
        <li class="waves-effect">
          <a href="#!">2</a>
        </li>
        <li class="waves-effect">
          <a href="#!">3</a>
        </li>
        <li class="waves-effect">
          <a href="#!">4</a>
        </li>
        <li class="waves-effect">
          <a href="#!">5</a>
        </li>
        <li class="waves-effect">
          <a href="#!">
            <i class="material-icons">»</i>
          </a>
        </li>
      </ul>
    </>
  );
};

export default M_Pagination;
