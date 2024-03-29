# MOKELE - MBEMBE

Mokele mbembe is a desci oriented online community and marketplace where amateur paleontologists can connect, share experiences, and collaborate. Fossil hunters will be able to keep a record of their findings on chain along with related such as age , location found and species. AI can assist to verify the physical fossil and ensure it matches its NFT representation on the blockchain. For instance, every ammonite has different patterns. AI can use this to ensure consistency between the physical and nft fossil. Additionally, fossil hunters can chat and collaborate via the platforms chat functionality.


# The following are some of the benefits of such a system 

## Fossil Identification:
Image Recognition: Implement AI-powered image recognition to help users identify fossils. Users can upload images, and the system can suggest potential matches, providing information about the fossil's type, age, and location.

## Ownership and Provenance:
NFTs for Fossil Ownership: Use blockchain to create non-fungible tokens (NFTs) representing each fossil. This ensures a transparent and immutable record of ownership, helping to prevent fraud and establish provenance.

Verified Discovery Records: Record fossil discoveries on the blockchain, including detailed information about the find. This verified data can be made accessible to the broader scientific community, potentially increasing the chances of recognition.

## Scientific Contribution:
Verified Discovery Records: Record fossil discoveries on the blockchain, including detailed information about the find. This verified data can be made accessible to the broader scientific community, potentially increasing the chances of recognition.

## Community Engagement:
Decentralized Community Platforms: Develop decentralized community platforms on the blockchain where amateur fossil hunters can connect, share experiences, and collaborate. These platforms could also include educational resources and mentorship programs.

# The following are some of the benefits of such a system 

# Smart Contract and Block Explorer 

The smart contract allows the project owner to set a funding goal and a duration for the crowdfunding campaign. Contributors can send Ether to the contract during the specified period. If the funding goal is reached before the deadline, the project owner can withdraw the funds. Otherwise, contributors can reclaim their contributions after the deadline has passed.

## Smart Contract Deployed at : 0x489e6c23f7c3485df9c63cbe054b4b54beef5a2cd10181a9ac4ac52623beeb4e
## Enterprise mode activated at : 0xbaccd7b2931e272854ce4a9b13111f8ba48b34468f5e4ca04381d58d9098bbb9

##  Blockscout Watch list added as shown below : 

![Blockscout](https://github.com/Bleyle823/Mokele-Mbembe/assets/86532040/c4d3cff5-4ae6-40b9-8cfb-0986ed9926cb)


## Features included

The Marketplace template includes the following features:

- Open collections (User-generated content)
  - Mint ERC-721
  - Mint ERC-1155
  - Creator's royalties support
- Homepage content customization
  - Featured NFTs
  - Featured collections
  - Featured users
  - Custom section with featured elements
- Search system
  - Search NFTs
  - Search collections
  - Search users
- Explore NFTs, collections and users with filtering and sorting systems
  - Explore NFTs
    - Filter by chain
    - Filter by status
    - Filter by price
    - Filter by collection
    - Filter by traits
    - Sort by dates
  - Explore collections
    - Filter by chain
    - Sort by volumes
  - Explore users
- Native currency and ERC20 support
- Lazymint for NFTs
- List NFTs on sale
  - Partial filling
  - Fixed price listing
- Make offers on NFTs
  - Partial filling
  - Open offer
- Purchase NFTs
- User profile
  - Account
    - Profile edition
    - Wallet page
  - NFTs "on sale"
  - NFTs "owned"
  - NFTs "created"
  - Offers ("bids") management
  - Trades history
  - Listings ("offers") management
- User verification system (verified status)
- Report system
  - Report a user
  - Report an NFT
- Notifications
  - In-app notifications
  - Email notifications
- NFT details
  - Chain information
  - Explorer link
  - Media IPFS link
  - Metadata IPFS link
  - Traits with percentages
- NFT history (activity)
  - Lazyminted
  - Minted
  - Listed
  - Purchased
  - Transferred
- Wallet connection with
  - Metamask
  - Coinbase
  - WalletConnect
  - Magic
  - Rainbow
- Multi-chain support
- Multi currency support
- Advanced fee customization support



## Libraries used

The Marketplace template is based on the following tech stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Liteflow](https://liteflow.com/)
- [ChakraUI](https://chakra-ui.com/)
- [Wagmi](https://wagmi.sh/)
- [Rainbowkit](https://rainbowkit.com/)
- [Next translate](https://github.com/aralroca/next-translate)

## Get started

To get started, start by configuring your environmental variables in the `.env` file, referring to the `.env.example` file as a guide.
For further customization, an optional option is to utilize the `environment.ts` file.

Once done you can install all the dependencies with `npm i` then run

```
npm run dev
```

Your application is now accessible at http://localhost:3000

## Customization

#### Theme

The theme is based on [ChakraUI](https://chakra-ui.com/) and can be [customized](https://chakra-ui.com/docs/styled-system/customize-theme) in the `/styles/theme.ts` file.

#### Application

Your application includes default navigation, metadata, and wallets that can be updated directly from the `pages/_app.tsx` file.
