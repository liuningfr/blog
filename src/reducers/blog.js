// action types
const INIT_LIST = 'INIT_LIST';

const data = [
  {
    title: 'Title 1',
    des: 'Description 1',
  },
  {
    title: 'Title 2',
    des: 'Description 2',
  },
  {
    title: 'Title 3',
    des: 'Description 3',
  },
  {
    title: 'Title 4',
    des: 'Description 4',
  },
];

// reducer
export default (state = { list: [] }, action) => {
  switch (action.type) {
    case INIT_LIST:
      // 初始化文章列表
      return { list: action.list };
    default:
      return state;
  }
};

// action creators
export const actions = {
  initList: () => ({ type: INIT_LIST, list: data }),
};
