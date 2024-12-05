export const stakingAbi = [
  {
    inputs: [
      { internalType: 'address', name: '_driftCredit', type: 'address' },
      { internalType: 'address', name: '_referralAddress', type: 'address' },
      { internalType: 'address', name: '_blacklistAddress', type: 'address' },
      {
        internalType: 'address',
        name: '_adminAddressManager',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  { inputs: [], name: 'SetRewardInvalid', type: 'error' },
  { inputs: [], name: 'TokenCurrentlyDoesNotHaveReward', type: 'error' },
  { inputs: [], name: 'TokenDoesNotHaveReward', type: 'error' },
  { inputs: [], name: 'WithdrawAmountInvalid', type: 'error' },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'forToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'reward',
        type: 'uint256',
      },
    ],
    name: 'Harvest',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'fromUser',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'forUser',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'referralLink',
        type: 'string',
      },
    ],
    name: 'ReferralInStaking',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'startTime',
        type: 'uint256',
      },
    ],
    name: 'SetReward',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Stake',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Withdraw',
    type: 'event',
  },
  {
    inputs: [],
    name: 'CONTRACT_CALL_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'OPERATOR_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'SECONDS_IN_ONE_HOUR',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'adminAddressManager',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'blacklistAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_referralAddress', type: 'address' },
    ],
    name: 'changeReferral',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_tokenNeedToCheck', type: 'address' },
    ],
    name: 'checkTokenInWhitelist',
    outputs: [
      { internalType: 'bool', name: 'isWhitelist', type: 'bool' },
      { internalType: 'uint256', name: 'index', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'driftCreditToken',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address[]', name: 'users', type: 'address[]' },
      { internalType: 'address', name: 'token', type: 'address' },
    ],
    name: 'getBatchPendingRewardForUser',
    outputs: [
      { internalType: 'uint256[]', name: 'results', type: 'uint256[]' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address[]', name: 'token', type: 'address[]' },
      { internalType: 'address', name: 'user', type: 'address' },
    ],
    name: 'getBatchUserData',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'token', type: 'address' },
          { internalType: 'uint256', name: 'stakingAmount', type: 'uint256' },
          { internalType: 'uint256', name: 'pendingReward', type: 'uint256' },
        ],
        internalType: 'struct IStakeDrift.GetUserData[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
    name: 'getHistoryReward',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'rewardOfOneTokenPerHour',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'startTimestamp', type: 'uint256' },
          { internalType: 'uint256', name: 'toTimestamp', type: 'uint256' },
        ],
        internalType: 'struct IStakeDrift.HistoryReward[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'token', type: 'address' },
      {
        internalType: 'uint256',
        name: 'currentHistoryreward',
        type: 'uint256',
      },
      { internalType: 'uint256', name: 'latestUpdateReward', type: 'uint256' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'getPendingReward',
    outputs: [{ internalType: 'uint256', name: 'reward', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'user', type: 'address' },
      { internalType: 'address', name: 'token', type: 'address' },
    ],
    name: 'getPendingRewardForUser',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
    name: 'harvest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address[]', name: 'tokens', type: 'address[]' }],
    name: 'harvestMulti',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'uint256', name: '', type: 'uint256' },
    ],
    name: 'historyReward',
    outputs: [
      {
        internalType: 'uint256',
        name: 'rewardOfOneTokenPerHour',
        type: 'uint256',
      },
      { internalType: 'uint256', name: 'startTimestamp', type: 'uint256' },
      { internalType: 'uint256', name: 'toTimestamp', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'referralAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'token', type: 'address' },
      {
        internalType: 'uint256',
        name: 'amountRewardInOneHour',
        type: 'uint256',
      },
    ],
    name: 'setRewardForToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'stake',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'tokensWhitelist',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'user', type: 'address' },
      { internalType: 'address', name: 'token', type: 'address' },
    ],
    name: 'updateRewardForUser',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'address', name: '', type: 'address' },
    ],
    name: 'userData',
    outputs: [
      {
        internalType: 'uint256',
        name: 'currentHistoryReward',
        type: 'uint256',
      },
      { internalType: 'uint256', name: 'pendingReward', type: 'uint256' },
      { internalType: 'uint256', name: 'amountStaking', type: 'uint256' },
      { internalType: 'uint256', name: 'latestUpdateReward', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'withdrawFor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const
