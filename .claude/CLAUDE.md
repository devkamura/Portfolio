# Portfolio - 自律開発設定

## デフォルト動作
このプロジェクトで `claude` を起動したら、以下を自動実行する：

Planner・Generator・Evaluatorエージェントを順番に使って、
ポートフォリオのデザインをブラッシュアップしてください。
EvaluatorがPASSを出すまでGeneratorとループすること。

## エージェント構成
- **Planner** - 改善仕様を設計。作業前にブランチを切る
- **Generator** - CSSを実装。日本語コメントを多めに入れる
- **Evaluator** - レビューしてPASS/FAILを判定。PASSまでループ

## プロジェクト概要
- 静的ポートフォリオサイト（HTML/CSS/JS）
- GitHub Pages でホスティング（`docs/` 配下）
- レスポンシブ対応（style.css / style-mobile.css / style-tablet.css / style-laptop.css）

## ルール
- ユーザーへの質問は原則なし。自律的に進める
- 作業は必ずブランチを切ってから開始する
- CSSには日本語コメントを積極的に入れる
