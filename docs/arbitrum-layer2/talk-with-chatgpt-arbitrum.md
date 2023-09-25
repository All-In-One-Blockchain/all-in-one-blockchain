# Talk About Arbitrum With ChatGPT

Arbitrum Nitro是一个称为"乐观Rollup"（Optimistic Rollup）的第二代扩容解决方案。它是由Offchain Labs开发的，旨在解决以太坊网络上的可扩展性和高昂的交易费用问题。

Arbitrum Nitro的目标是通过在以太坊上运行一个"Rollup链"来提高扩容能力。Rollup链是一个基于以太坊的二级协议，将交易批量处理并将其汇总为一个单一的根哈希，然后将该根哈希提交到以太坊主链上。这种设计可以大大减少在以太坊主链上处理的交易数量，从而提高可扩展性和降低交易费用。

Arbitrum Nitro采用乐观执行的方式，这意味着在提交到以太坊主链之前，它会假设所有交易都是有效且合规的。然后，它会在链上执行这些交易，并将执行结果存储在Rollup链上。如果有人对执行结果产生异议，可以通过在主链上提交争议来解决。这种方式使得Rollup链可以实现高吞吐量，同时仍然能够享受以太坊主链的安全性。

Arbitrum Nitro还引入了一种称为"Gas Stations Network"的机制，通过这种机制，用户可以使用与以太坊主链上相同的方式支付交易费用，而无需持有以太坊来支付手续费。

总的来说，Arbitrum Nitro是一个旨在提高以太坊可扩展性和降低交易费用的创新解决方案，它使用乐观Rollup和Gas Stations Network等技术来实现这些目标。



## 摘要：

我们介绍了Arbitrum Nitro，一个第二代Layer 2区块链协议。Nitro相比之前的Rollup解决方案提供了更高的吞吐量、更快的最终性和更高效的争议解决机制。Nitro通过几个设计原则实现了这些特性：将交易的排序与确定性执行分离；结合现有的以太坊仿真软件并添加扩展以实现跨链功能；将执行与证明分开编译，使得执行速度快而证明结构化且与机器无关；并使用基于交互式欺诈证明的乐观Rollup协议将交易结果结算到底层的Layer 1链上。

## 引言

在之前的工作中，我们描述了Arbitrum [9]，这是一个旨在改善智能合约性能和可扩展性的系统和协议。本文介绍了Arbitrum Nitro，这是一个明显改进的设计，相对于原版本具有更高的效率、更低的延迟、更强的活跃性保证和更好的激励兼容性等优势。

(Note: I am only able to provide a brief summary of the introduction based on the information provided. The full content of the introduction is not available.)

### 1.1 Arbitrum Nitro的特性
Nitro支持执行智能合约。该系统被实现为以太坊[14]上的"Layer 2"，尽管原则上它可以在任何支持基本智能合约功能的区块链系统上实现。Nitro提供了一个与以太坊兼容的链：Nitro在以太坊虚拟机（EVM）代码中运行智能合约应用程序，并且Nitro节点支持与常见的以太坊节点相同的API。Nitro协议在以下条件下保证Layer 2链的安全性和进展：（1）底层的以太坊链是安全和活跃的，（2）Nitro协议中至少有一个参与方诚实行为。该协议被称为"乐观"，因为当各方按照自己的激励行事时，执行效率更高。

(Note: Again, I can only provide a brief summary based on the available information. The full content of section 1.1 is not available.)

根据提供的内容，Nitro的一个变体称为AnyTrust，它在降低成本的同时需要额外的信任假设。主要部分介绍了常规的Nitro，而AnyTrust的区别在第7节中进行了描述。

据称，Nitro已经部署在Arbitrum One链上，以以太坊作为底层第一层，部署日期为2022年8月31日。Nitro的源代码，包括其子模块，可以在GitHub上找到，链接为：[https://github.com/offchainlabs/nitro ↗](https://github.com/offchainlabs/nitro)。

### 1.2 设计方法
Nitro的设计具有四个独特的特点，我们将使用这些特点来组织介绍。

- **先排序，再确定性执行：Nitro将提交的交易分为两个阶段处理。首先，它将交易按照将要处理的顺序放入序列中，并对该序列进行确认。然后，它对每个交易依次应用确定性状态转换函数。**
- 以Geth为核心：Nitro中的核心执行和状态维护功能由开源的go-ethereum（"geth"）软件包的代码处理，该软件包是最流行的以太坊执行层节点软件。通过将geth代码编译为库，Nitro确保其执行和状态与以太坊高度兼容。
- 将执行与证明分离：Nitro将其状态转换函数的代码编译为两个目标。该代码在普通操作中在Nitro节点中进行本机执行。如果需要，在欺诈证明协议中使用时，该代码将被编译为可移植的WebAssembly（"wasm"）代码。这种双重目标的方法确保了执行速度快，同时证明基于结构化的、与机器无关的代码进行。
- 基于交互式欺诈证明的乐观 Rollup：在原始的Arbitrum[9]设计基础上，Nitro采用了改进的乐观Rollup协议，该协议基于优化的基于解剖的交互式欺诈证明协议。