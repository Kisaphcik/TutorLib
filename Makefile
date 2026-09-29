frontend:
	cd frontend && npm run dev

backend:
	cd tutorlib && uv run uvicorn tutorlib.main:app --reload

dev:
	@echo "Starting TutorLib..."