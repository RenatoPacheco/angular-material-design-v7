export interface User {
  id?: string;
  name?: string;
  lastName?: string;
  email?: string;
}

export class UserEmpty {
  static basic(): User {
    return {
      id: null
    };
  }

  static simple(): User {
    return {
      id: null,
      name: null,
      lastName: null,
      email: null
    };
  }

  static complete(): User {
    return UserEmpty.simple();
  }
}

export class UserOrderBy {
  static byId(a: User, b: User): number {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  }

  static byName(a: User, b: User): number {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  static byLastName(a: User, b: User): number {
    if (a.lastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    }
    return 0;
  }

  static byEmail(a: User, b: User): number {
    if (a.email < b.email) {
      return -1;
    }
    if (a.email > b.email) {
      return 1;
    }
    return 0;
  }

  static byFullName(a: User, b: User): number {
    const aFull = `${a.name} ${a.lastName}`;
    const bFull = `${b.name} ${b.lastName}`;

    if (aFull < bFull) {
      return -1;
    }
    if (aFull > bFull) {
      return 1;
    }
    return 0;
  }
}


export const UserMock: User[] = [
  {
    id: '1',
    name: 'Ryan',
    lastName: 'S. Thomas',
    email: 'RyanSThomas@dayrep.com'
  },
  {
    id: '2',
    name: 'Barry',
    lastName: 'S. Taylor',
    email: 'BarrySTaylor@rhyta.com'
  },
  {
    id: '3',
    name: 'Leon',
    lastName: 'D. Jan',
    email: 'LeonDJan@rhyta.com'
  }
];
