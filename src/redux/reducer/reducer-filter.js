import { initialStateFilter } from '../initial-state';
import { TOGGLE_FILTER } from '../actions/action-types';

export const reducerFilter = (state = initialStateFilter, action) => {
  switch (action.type) {
    case TOGGLE_FILTER: {
      const { value } = action.payload;
      let updatedState = [...state];

      if (value === 'all') {
        const allChecked = state[0].checked;
        updatedState = updatedState.map((checkbox) => ({
          ...checkbox,
          checked: !allChecked,
        }));
      } else {
        const index = state.findIndex((checkbox) => checkbox.value === value);
        updatedState[index] = {
          ...updatedState[index],
          checked: !updatedState[index].checked,
        };
        if (index !== 0) {
          const allOthersChecked = updatedState.slice(1).every((checkbox) => checkbox.checked);
          updatedState[0].checked = allOthersChecked;
        }
      }
      return updatedState;
    }
    default:
      return state;
  }
};
