import { isWithinInterval } from 'date-fns';
import { IUser } from '../interfaces/user/user.interface';
import { IFilterOption } from '../interfaces/filter-options.interface';

const filterUsersListByName = (
  name: string | undefined,
  usersList: IUser[]
): IUser[] => {
  const NAME_NOT_TYPPED = name === undefined;

  if (NAME_NOT_TYPPED) {
    return usersList;
  }

  const filteredList = usersList.filter((user) =>
    user.nome.toLowerCase().includes(name.toLowerCase())
  );

  return filteredList;
};

const filterUsersListByStatus = (
  status: boolean | undefined,
  usersList: IUser[]
): IUser[] => {
  const STATUS_UNDEFINED = status === undefined;

  if (STATUS_UNDEFINED) {
    return usersList;
  }

  const filteredList = usersList.filter((user) => user.ativo === status);

  return filteredList;
};

const filterUsersListByDate = (
  startDate: Date | undefined,
  endDate: Date | undefined,
  usersList: IUser[]
): IUser[] => {
  const DATE_NOT_SELECTED = startDate === undefined || endDate === undefined;

  if (DATE_NOT_SELECTED) {
    return usersList;
  }

  const checkDateInterval = (user: IUser) =>
    isWithinInterval(new Date(user.dataCadastro), {
      start: startDate,
      end: endDate,
    });

  const listFiltered = usersList.filter(checkDateInterval);

  return listFiltered;
};

const filterUsersList = (
  filterOptions: IFilterOption,
  usersList: IUser[]
): IUser[] => {
  let filteredList: IUser[] = [];

  filteredList = filterUsersListByName(filterOptions.name, usersList);
  filteredList = filterUsersListByStatus(filterOptions.status, filteredList);
  filteredList = filterUsersListByDate(
    filterOptions.startDate,
    filterOptions.endDate,
    filteredList
  );

  return filteredList;
};

export { filterUsersList };
