# Vamshi Krishna Bandari · Portfolio

A responsive editorial portfolio with warm ivory, violet, and lime styling, an interactive 3D neural globe, original CSS project illustrations, and expandable technical case studies. Built with HTML, CSS, and JavaScript. No dependency installation or build step is needed. Python 3 serves the website locally; Node.js is optional for syntax checking.

## Run

From this directory, run `npm start` or `python3 -m http.server 3000 --bind 0.0.0.0`. Run `npm run check` to check JavaScript syntax.

## Personalize

Edit `index.html` to add verified biography, project case studies, skills, education, and public contact details. Current exploration cards describe interests rather than completed projects. LinkedIn could not be retrieved during creation. The featured Parliament invitation milestone and personal reflection come from a post and invitation supplied directly by the user. The invitation is presented as selection to attend, without claiming an award win or confirmed attendance. The designed invitation card transcribes the supplied details; it is not the original image. The MSc in Artificial Intelligence at the University of Roehampton, Electrical and Electronics Engineering background, and IET Student Membership were also supplied directly by the user. No completion dates, membership identifiers, or qualifications beyond those statements are inferred. The LinkedIn contact links already point to the supplied profile.

The neural globe responds to pointer movement and respects reduced-motion preferences. Fonts use Google Fonts when available with system fallbacks. Deploy the three static files (`index.html`, `styles.css`, `app.js`) to any static hosting provider. No secrets or backend services are needed.

The clean energy milestone uses the user-supplied London Clean Energy Roundtable invitation dated 24 June 2026, hosted at the House of Commons, and credits Navendu Mishra MP. It describes an invitation without inferring confirmed attendance or event outcomes. The user subsequently specified the engineering background as B.Tech Electrical & Electronics Engineering.

London Tech Week 2026 is described as an attended event based on the user’s supplied post. Its technology topics represent event exposure and learning, not shipped projects, professional certifications, or hands-on implementation claims. Inline chat photos were visible but not exposed as downloadable workspace files, so they have not been embedded.

The featured battery SOH project is based on the linked repository README, model_paper.py, and committed results/summary.json inspected during portfolio development. Results are repository-reported, not independently reproduced here. Despite the repository name, the published project is SOH-only; RUL work is unpublished. Oxford, NASA, and CALCE RMSE values retain the source limitations.

EduAI is summarized from the user-supplied hackdavid/AI-powered-personalized-education-system README, which credits the EduAI Team and Roehampton AI Engineering course. Vamshi confirmed his contribution as RAG; the portfolio credits that without inferring individual subcomponents. No source code or images from that repository are copied; only a descriptive summary and links are included. Its README specifies academic use and no redistribution without permission. The demo link is repository-listed and has not been validated.

DT-AttNet is summarized from its README and reports/Part2_Report.md. The full-model accuracy is 97.96% ± 1.16% in the detailed report, despite the README’s broader >98% headline; the portfolio uses the specific result, includes the baseline, and explicitly describes synthetic-data limitations. No clinical or regulatory compliance claims are made.

Credit Risk Prediction Agent is summarized from the README and the notebook inside its coursework ZIP, inspected without executing it. Verified imports and model code include scikit-learn GaussianNB, RandomForestClassifier, KNeighborsClassifier, a stratified 75/25 split, GridSearchCV, and standard classification metrics. No model performance or production-readiness claims are made.

## Public deployment

The GitHub Actions workflow `.github/workflows/deploy-pages.yml` publishes only the static website files on pushes to `main`. In the GitHub repository, open Settings → Pages and set the build source to **GitHub Actions**. The workflow can also be started manually from Actions.

Expected Pages address after a successful deployment: `https://vamshikrishnabandari07.github.io/vamshi-krishna-ai-enthusiast/`. This address must be checked after deployment; its presence here does not establish that the site is live.
